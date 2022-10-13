type SlimImage = any;

export interface Slim {
  data: {
    input: {
      image: SlimImage,
      file: SlimImage,
    },
    output: {
      image: SlimImage,
      file: SlimImage,
    }
  }
}