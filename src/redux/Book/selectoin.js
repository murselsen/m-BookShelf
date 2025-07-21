export const getAllBooks = state => state.book.books;
export const getAllCategories = state => state.book.categories;
export const getSelectedCategory = state => state.book.selectedCategory;
export const isLoading = state => state.book.isLoading;
export const error = state => state.book.error;