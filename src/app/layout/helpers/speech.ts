export type Speech = {
    type: SpeechType,
    inStock?: boolean
}

export type SpeechType = 'welcome' | 'search' | 'vehicle' | 'part';