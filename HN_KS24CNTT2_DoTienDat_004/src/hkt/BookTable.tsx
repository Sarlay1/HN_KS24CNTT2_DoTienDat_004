import { Book } from "../types/book";

interface Props {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
}

function BookTable({ books, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow overflow-hidden">
      <table className="w-full white-space-nowrap">
        <thead>
          <tr className="bg-white-600 text-black">
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Tên Sách</th>
            <th className="px-4 py-2 text-center">Trạng Thái</th>
        
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id} className="border-b">
              <td className="px-4 py-2">{b.id}</td>
              <td className="px-4 py-2">{b.title}</td>

              <td className="px-4 py-2 text-center space-x-2">
                <button
                  onClick={() => onEdit(b)}
                  className="px-3 py-1 bg-gray-200 text-white rounded-lg text-sm hover:bg-white"
                >
                  Sửa
                </button>
                <button
                  onClick={() => onDelete(b.id)}
                  className="px-3 py-1 bg-gray-200 text-white rounded-lg text-sm hover:bg-white"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
