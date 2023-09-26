function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
      throw new Error("Base and height must be greater than zero");
    }
  
    return (base * height) / 2;
  }