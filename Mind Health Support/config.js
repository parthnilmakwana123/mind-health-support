// Mind Health Support - Multi-Provider AI Configuration
// Supports: Groq (primary), Gemini (fallback), Local (emergency fallback)
// 
// HOW TO GET FREE API KEYS:
// 1. Groq (RECOMMENDED): https://console.groq.com/keys - Free, no credit card needed
// 2. Gemini: https://makersuite.google.com/app/apikey - Free tier available

const GEMINI_CONFIG = {
    // ============================================================
    // PROVIDER CONFIGURATION
    // ============================================================
    
    // Active provider: 'groq', 'gemini', or 'auto' (tries groq → gemini → local)
    ACTIVE_PROVIDER: 'auto',

    // --- Groq Configuration (FREE, ultra-fast, recommended) ---
    // Get your free key at: https://console.groq.com/keys
    GROQ: {
        API_KEY: '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', // <-- PASTE YOUR GROQ API KEY HERE
        API_URL: 'https://api.groq.com/openai/v1/chat/completions',
        MODEL: 'llama-3.3-70b-versatile', // Best free model for mental health
        CONFIG: {
            temperature: 0.7,
            max_tokens: 1024,
            top_p: 0.9,
        }
    },

    // --- Gemini Configuration (fallback) ---
    GEMINI: {
        API_KEY: 'AIzaSyD5vLlsuQaX0nsr_82bf8d61Yv89zCDiPs',
        API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        CONFIG: {
            temperature: 0.7,
            maxOutputTokens: 1024,
            topP: 0.8,
            topK: 40
        }
    },

    // Legacy properties (for backward compatibility)
    get API_KEY() { return this.GEMINI.API_KEY; },
    get API_URL() { return this.GEMINI.API_URL; },
    get MODEL_CONFIG() { return this.GEMINI.CONFIG; },

    // ============================================================
    // MENTAL HEALTH SYSTEM PROMPT
    // ============================================================
    SYSTEM_PROMPT: `You are Mind Care Bot, a compassionate and empathetic AI mental health support assistant created for the Mind Health Support platform.

YOUR CORE ROLE:
- Provide warm, empathetic, non-judgmental emotional support
- Use evidence-based therapeutic techniques (CBT, DBT, mindfulness)
- Offer practical coping strategies tailored to the user's situation
- Suggest professional resources when appropriate
- Maintain a caring, human-like conversational tone

COMMUNICATION STYLE:
- Be warm and conversational, not clinical or robotic
- Use gentle validation ("I hear you", "That sounds really challenging")
- Ask thoughtful follow-up questions to understand better
- Keep responses concise (2-4 paragraphs max) but meaningful
- Use emojis sparingly for warmth (💙, 🌟, 🤗)
- Format key tips with bullet points for easy reading

IMPORTANT GUIDELINES:
- NEVER provide medical diagnoses or replace professional therapy
- ALWAYS recommend professional help for serious concerns
- For crisis situations (suicidal thoughts, self-harm), immediately provide emergency resources:
  • National Suicide Prevention Lifeline: 988 (24/7)
  • Crisis Text Line: Text HOME to 741741
  • AASRA (India): 9820466726
  • Emergency Services: 911
- Maintain user privacy and confidentiality
- Be culturally sensitive and inclusive
- If unsure, acknowledge limitations honestly

Remember: You are a supportive companion, not a replacement for professional mental health care. Your goal is to make the user feel heard, validated, and gently guided toward helpful resources and coping strategies.`,

    // ============================================================
    // CRISIS & TOPIC DETECTION
    // ============================================================
    CRISIS_KEYWORDS: [
        'suicide', 'sucide', 'suicid', 'suiside', 'siucide', 'kill myself', 'killmyself', 'end it all', 'not worth living',
        'want to die', 'hurt myself', 'self harm', 'selfharm', 'cut myself',
        'overdose', 'jump', 'bridge', 'crisis', 'emergency',
        'harm myself', 'end my life', 'suicidal thoughts', 'sucidal', 'suisidal',
        'don\'t want to live', 'better off dead', 'no reason to live'
    ],

    MENTAL_HEALTH_TOPICS: [
        'anxiety', 'anxity', 'anxeity', 'anxiaty', 'depression', 'depresion', 'depresed', 'dipression', 'stress', 'stres', 'sleep', 'relationships',
        'work', 'therapy', 'medication', 'self-care', 'trauma',
        'grief', 'addiction', 'eating disorders', 'bipolar',
        'ptsd', 'ocd', 'panic attacks', 'social anxiety',
        'loneliness', 'burnout', 'anger', 'self-esteem'
    ]
};

// ============================================================
// API PROVIDER FUNCTIONS
// ============================================================

// Main function - tries providers in order based on configuration
async function getGeminiResponse(userMessage, conversationHistory = []) {
    const provider = GEMINI_CONFIG.ACTIVE_PROVIDER;

    if (provider === 'groq') {
        return await callGroqAPI(userMessage, conversationHistory);
    } else if (provider === 'gemini') {
        return await callGeminiAPI(userMessage, conversationHistory);
    } else {
        // 'auto' mode - try groq first, then gemini, then local fallback
        return await callWithFallback(userMessage, conversationHistory);
    }
}

// Auto-fallback: Groq → Gemini → Local
async function callWithFallback(userMessage, conversationHistory) {
    // Try Groq first (if API key is configured)
    if (GEMINI_CONFIG.GROQ.API_KEY && GEMINI_CONFIG.GROQ.API_KEY.trim() !== '') {
        try {
            console.log('🟢 Trying Groq API (primary)...');
            const response = await callGroqAPI(userMessage, conversationHistory);
            if (response && response.trim()) {
                console.log('✅ Groq API response received successfully');
                return response;
            }
        } catch (error) {
            console.warn('⚠️ Groq API failed, trying Gemini...', error.message);
        }
    } else {
        console.log('⏩ Groq API key not configured, skipping...');
    }

    // Try Gemini as fallback
    if (GEMINI_CONFIG.GEMINI.API_KEY && 
        GEMINI_CONFIG.GEMINI.API_KEY !== 'YOUR_GEMINI_API_KEY' &&
        GEMINI_CONFIG.GEMINI.API_KEY.trim() !== '') {
        try {
            console.log('🟡 Trying Gemini API (fallback)...');
            const response = await callGeminiAPI(userMessage, conversationHistory);
            if (response && response.trim()) {
                console.log('✅ Gemini API response received successfully');
                return response;
            }
        } catch (error) {
            console.warn('⚠️ Gemini API also failed, using local fallback...', error.message);
        }
    } else {
        console.log('⏩ Gemini API key not configured, skipping...');
    }

    // Final fallback - local responses
    console.log('🔴 All APIs failed. Using local fallback responses.');
    return getFallbackResponse(userMessage);
}

// ============================================================
// GROQ API (Primary - FREE, ultra-fast)
// Uses OpenAI-compatible chat completions endpoint
// Free tier: 30 RPM, 14,400 RPD for llama-3.3-70b
// ============================================================
async function callGroqAPI(userMessage, conversationHistory = []) {
    if (!GEMINI_CONFIG.GROQ.API_KEY || GEMINI_CONFIG.GROQ.API_KEY.trim() === '') {
        throw new Error('Groq API key not configured');
    }

    // Build messages array with system prompt + conversation history
    const messages = [
        {
            role: 'system',
            content: GEMINI_CONFIG.SYSTEM_PROMPT
        }
    ];

    // Add recent conversation history (last 10 messages)
    const recentHistory = conversationHistory.slice(-10);
    for (const msg of recentHistory) {
        messages.push({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content
        });
    }

    // Add current user message ONLY if it's not already the last message in history
    if (messages.length === 1 || messages[messages.length - 1].content !== userMessage) {
        messages.push({
            role: 'user',
            content: userMessage
        });
    }

    const requestBody = {
        model: GEMINI_CONFIG.GROQ.MODEL,
        messages: messages,
        temperature: GEMINI_CONFIG.GROQ.CONFIG.temperature,
        max_tokens: GEMINI_CONFIG.GROQ.CONFIG.max_tokens,
        top_p: GEMINI_CONFIG.GROQ.CONFIG.top_p,
    };

    console.log('📡 Calling Groq API with model:', GEMINI_CONFIG.GROQ.MODEL);

    const response = await fetch(GEMINI_CONFIG.GROQ.API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GEMINI_CONFIG.GROQ.API_KEY}`
        },
        body: JSON.stringify(requestBody)
    });

    console.log('Groq API status:', response.status);

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Groq API error:', response.status, errorText);

        // Retry once on rate limit
        if (response.status === 429) {
            console.warn('⏳ Rate limited. Retrying in 2 seconds...');
            await new Promise(r => setTimeout(r, 2000));
            const retryResponse = await fetch(GEMINI_CONFIG.GROQ.API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GEMINI_CONFIG.GROQ.API_KEY}`
                },
                body: JSON.stringify(requestBody)
            });
            if (retryResponse.ok) {
                const retryData = await retryResponse.json();
                if (retryData.choices?.[0]?.message?.content) {
                    return retryData.choices[0].message.content;
                }
            }
        }

        throw new Error(`Groq API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content;
    }
    
    throw new Error('Invalid Groq API response format');
}

// ============================================================
// GEMINI API (Fallback)
// ============================================================
async function callGeminiAPI(userMessage, conversationHistory = []) {
    if (!GEMINI_CONFIG.GEMINI.API_KEY || GEMINI_CONFIG.GEMINI.API_KEY === 'YOUR_GEMINI_API_KEY') {
        throw new Error('Gemini API key not configured');
    }

    console.log('📡 Calling Gemini API...');

    const contents = [];
    
    // Add conversation history
    const recentHistory = conversationHistory.slice(-10);
    let historyAdded = false;
    
    for (const msg of recentHistory) {
        // Skip the very last message if it's the current user message, we'll add it with the system prompt
        if (msg === recentHistory[recentHistory.length - 1] && msg.content === userMessage) {
            continue;
        }
        contents.push({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }]
        });
        historyAdded = true;
    }

    // Add current user message (with system prompt injected if it's the first message we send)
    let finalMessageText = userMessage;
    if (!historyAdded) {
        finalMessageText = `${GEMINI_CONFIG.SYSTEM_PROMPT}\n\nUser message: ${userMessage}`;
    }

    contents.push({
        role: 'user',
        parts: [{ text: finalMessageText }]
    });

    // We can also use systemInstruction for Gemini 1.5/2.0
    const requestBody = {
        systemInstruction: {
            parts: [{ text: GEMINI_CONFIG.SYSTEM_PROMPT }]
        },
        contents: contents,
        generationConfig: GEMINI_CONFIG.GEMINI.CONFIG
    };

    const response = await fetch(`${GEMINI_CONFIG.GEMINI.API_URL}?key=${GEMINI_CONFIG.GEMINI.API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    });

    console.log('Gemini API status:', response.status);

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Gemini API error:', response.status, errorText);

        // Retry on rate limit
        if (response.status === 429) {
            console.warn('⏳ Rate limited. Retrying in 2 seconds...');
            await new Promise(r => setTimeout(r, 2000));
            const retryResponse = await fetch(
                `${GEMINI_CONFIG.GEMINI.API_URL}?key=${GEMINI_CONFIG.GEMINI.API_KEY}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(requestBody)
                }
            );
            if (retryResponse.ok) {
                const retryData = await retryResponse.json();
                if (retryData.candidates?.[0]?.content?.parts?.[0]?.text) {
                    return retryData.candidates[0].content.parts[0].text;
                }
            }
        }

        throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text;
    }

    throw new Error('Invalid Gemini API response format');
}

// ============================================================
// LOCAL FALLBACK RESPONSES
// ============================================================
function getFallbackResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Crisis detection - highest priority
    if (GEMINI_CONFIG.CRISIS_KEYWORDS.some(keyword => lowerMessage.includes(keyword))) {
        return `I'm deeply concerned about what you're sharing with me. Your life has value and meaning, even when it doesn't feel that way right now.

🚨 IMMEDIATE HELP IS AVAILABLE:

• **National Suicide Prevention Lifeline: 988** (available 24/7)
• **Crisis Text Line: Text HOME to 741741**
• **AASRA (India): 9820466726**
• **Emergency Services: 911**
• **International Association for Suicide Prevention: https://www.iasp.info/resources/Crisis_Centres/**

You are not alone in this. There are trained professionals who want to help you through this difficult time. Please reach out to one of these resources immediately.

Your feelings are valid, but they are temporary. Help is available, and recovery is possible. 💙`;
    }

    // Topic-specific fallback responses
    if (lowerMessage.includes('anxiety') || lowerMessage.includes('anxious') || lowerMessage.includes('worried') || lowerMessage.includes('anxity') || lowerMessage.includes('anxeity') || lowerMessage.includes('anxiaty')) {
        return `I hear you — anxiety can feel really overwhelming. Here are some things that might help right now:

🧘 **Quick Relief:**
• Try the 4-7-8 breathing technique: Inhale for 4 seconds, hold for 7, exhale for 8
• Ground yourself: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste

💡 **Longer-term strategies:**
• Regular mindfulness or meditation practice
• Gentle exercise like walking
• Limiting caffeine
• Talking to a therapist

You're not alone in this. Would you like to try a breathing exercise together? 💙`;
    }

    if (lowerMessage.includes('depress') || lowerMessage.includes('sad') || lowerMessage.includes('hopeless') || lowerMessage.includes('depresion') || lowerMessage.includes('dipression') || lowerMessage.includes('depresed')) {
        return `I'm really sorry you're feeling this way. Depression can make everything feel heavy, but please know that these feelings are treatable and temporary.

🌟 **Small steps that can help:**
• Try to get 15 minutes of sunlight today
• Reach out to one person you trust
• Do one small thing that used to bring you joy
• Be gentle with yourself — it's okay to not be okay

🤝 **Professional support:**
• Consider talking to a therapist or counselor
• Your doctor can discuss treatment options
• Online therapy platforms make it more accessible

You took a brave step by sharing this. I'm here for you. 💙`;
    }

    if (lowerMessage.includes('stress') || lowerMessage.includes('overwhelm') || lowerMessage.includes('stres')) {
        return `Stress can really take a toll on your well-being. Let's work through this together.

⚡ **Immediate relief:**
• Take 3 slow, deep breaths right now
• Step away from what's stressing you for 5 minutes
• Tense and release your muscles from toes to head

🎯 **Managing stress:**
• Break big tasks into smaller, manageable steps
• Set boundaries — it's okay to say "no"
• Prioritize sleep and regular meals
• Move your body in ways you enjoy

What's causing you the most stress right now? I'd love to help you brainstorm solutions. 💙`;
    }

    // General supportive responses
    const responses = [
        `Thank you for reaching out. I'm here to listen and support you. While I'm experiencing some connectivity issues, your well-being matters deeply.

💙 **Here are some resources that might help:**
• **Crisis support:** Call 988 (24/7) or text HOME to 741741
• **Find a therapist:** psychologytoday.com
• **Self-care:** Try a short breathing exercise or mindful walk

What's on your mind? I'd like to help however I can.`,

        `I appreciate you sharing with me. I'm having some technical difficulties right now, but I want you to know that your feelings are valid and you deserve support.

🌟 **Things you can try right now:**
• Take 3 deep breaths
• Write down what you're feeling
• Reach out to someone you trust
• Practice a moment of self-compassion

Remember: It's okay to ask for help. You're not alone in this. 💙`,

        `I hear you, and I'm glad you're reaching out. While I work through a technical issue, here's what I want you to remember:

💪 **You matter.**
• Your feelings are valid
• Seeking help is a sign of strength
• Things can and do get better

📞 **For immediate support:**
• Mental Health Helpline: 1800-599-0019
• AASRA: 9820466726
• Crisis Text Line: Text HOME to 741741

I'm here for you. Please try again in a moment. 💙`
    ];

    return responses[Math.floor(Math.random() * responses.length)];
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function isCrisisMessage(message) {
    const lowerMessage = message.toLowerCase();
    return GEMINI_CONFIG.CRISIS_KEYWORDS.some(keyword => lowerMessage.includes(keyword));
}

function detectMentalHealthTopics(message) {
    const lowerMessage = message.toLowerCase();
    return GEMINI_CONFIG.MENTAL_HEALTH_TOPICS.filter(topic => lowerMessage.includes(topic));
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        GEMINI_CONFIG,
        getGeminiResponse,
        getFallbackResponse,
        isCrisisMessage,
        detectMentalHealthTopics
    };
}
