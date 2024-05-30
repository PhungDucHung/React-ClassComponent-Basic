import React from "react"; 

// Hàm để tạo màu ngẫu nhiên
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#'; 
    for (var i = 0; i < 6; i++) { 
      color += letters[Math.floor(Math.random() * 16)]; 
    }
    return color; 
}

// HOC (Higher-Order Component) để thêm màu ngẫu nhiên cho một component được bọc
const color = (WrappedComponent) => {
    const colorRandom = getRandomColor(); // Gọi hàm getRandomColor để lấy màu ngẫu nhiên
    return (props) => (
        <div style={{color: colorRandom}}> {/* Áp dụng màu ngẫu nhiên cho div */}
            <WrappedComponent {...props} /> {/* Truyền props và render WrappedComponent */}
        </div>
    );
}

export default color; // Xuất HOC để sử dụng ở nơi khác
