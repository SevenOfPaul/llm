export default new Map([
  //语音转文字hi
  //https://developers.cloudflare.com/workers-ai/models/whisper-large-v3-turbo/
  ["videoToText", "@cf/openai/whisper-large-v3-turbo"],
  //图片解析
  //object detection  https://developers.cloudflare.com/workers-ai/models/uform-gen2-qwen-500m/
  ["textToImage", "@cf/unum/uform-gen2-qwen-500m"],
  //图片生成
  ["imageGeneration", "@cf/bytedance/stable-diffusion-xl-lightning"],
  [
    //文本生成
    ("textGeneration", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
  ],
  //文本翻译
  ["textTranslation", "@cf/meta/m2m100-1.2b"],
  //图像识别
  ["imageAnalysis", "@cf/microsoft/resnet-50"]
]);