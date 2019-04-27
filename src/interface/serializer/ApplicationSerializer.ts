class ApplicationSerializer {
  error(type: string) {
    if (type === "hoge") {
      return "HOGE ERROR";
    } else {
      return "DEFAULT ERROR";
    }
  }
}

export { ApplicationSerializer };
