export  default new Map([
    //语音转文字hi
    "videoToText","@cf/openai/whisper",
    //文本生成
    "textGeneration","@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
    //文本翻译
    "textTranslation","@cf/meta/m2m100-1.2b",
    //图像识别
    "imageAnalysis","@cf/microsoft/resnet-50",
    "imageGeneration","@cf/black-forest-labs/flux-1-schnell",
])