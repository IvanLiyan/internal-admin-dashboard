export const readFile = (file: File): Promise<Blob | undefined> => {
  return new Promise<Blob | undefined>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result == null) {
        reject();
      } else {
        const blob = new Blob([reader.result.toString()], {
          type: file.type,
        });
        resolve(blob);
      }
    };

    reader.onerror = () => {
      reject();
    };

    reader.readAsText(file);
  });
};
