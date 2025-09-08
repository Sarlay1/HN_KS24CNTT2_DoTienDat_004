import { useState } from "react";
import Header from "./hkt/Header";
import BookTable from "./hkt/BookTable";
import BookForm from "./hkt/BookForm";
import ConfirmDialog from "./hkt/ConfirmDialog";
import { Book } from "./hkt/book";

function App() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "Design Patterns", author: "Erich Gamma" },
    { id: 3, title: "Refactoring", author: "Martin Fowler" },
    { id: 4, title: "Domain-Driven Design", author: "Eric Evans" },
    { id: 5, title: "The Pragmatic Programmer", author: "Andrew Hunt" },
  ]);

  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleSave = (book: Book) => {
    if (book.id === 0) {
      const newBook = { ...book, id: books.length + 1 };
      setBooks([...books, newBook]);
    } else {
      setBooks(books.map((b) => (b.id === book.id ? book : b)));
    }
    setShowForm(false);
    setEditingBook(null);
  };

  const handleDelete = (id: number) => {
    setBooks(books.filter((b) => b.id !== id));
    setDeleteId(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />

      <div className="mb-4 flex justify-end">
        <button
          onClick={() => {
            setEditingBook(null);
            setShowForm(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ➕ Thêm sách
        </button>
      </div>

      <BookTable
        books={books}
        onEdit={(book) => {
          setEditingBook(book);
          setShowForm(true);
        }}
        onDelete={(id) => setDeleteId(id)}
      />

      {showForm && (
        <BookForm
          book={editingBook}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}

      {deleteId !== null && (
        <ConfirmDialog
          message="Bạn chắc chắn muốn xóa?"
          onConfirm={() => handleDelete(deleteId)}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
}

export default App;
