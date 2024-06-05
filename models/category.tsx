class Category {
  id: string;
  title: string;
  color: string;
  image: string;
  constructor(id: string, title: string, color: string, image: string) {
    this.id = id;
    this.title = title;
    this.color = color;
    this.image = image
  }
}

export default Category;
