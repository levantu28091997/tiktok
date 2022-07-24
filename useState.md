const [state, setState] = useState(initState)

### Luu y
Keyword trong React
- Hooks : móc
- HOCK  : -Higher Order Component -> Component bậc cao
- Render props


========== setState ==================
initState: chỉ dùng cho lần đầu
componet sẽ được render lại khi setState


========== useEffect ==================
    Xảy ra với cả 3 cách
    - Callback luôn được gọi sau khi component mounted
    - Cleanup function luôn được gọi trước khi component unmounted
    - Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
    1. useEffect(callback)
      - Gọi Callback mỗi khi component re-render
      - Callback sẽ được gọi sau khi component thêm vào DOM

    2. useEffect(callback, [])
      - Chỉ gọi callback 1 lần sau khi component mounted

    3. useEffect(callback, [deps])
      - Callback sẽ được gọi lại mỗi khi [deps] thay đổi


========== useLayoutEffect ==================
1. useEffect
    - Cập nhật lại state
    - Cập nhật Dom (mutated)
    - Render lại UI
    - Gọi cleanup nếu [deps] thay đổi
    - Gọi useEffect callback
2. useLayoutEffect
    - Cập nhật lại state
    - Cập nhật Dom (mutated)
    - gọi cleanup nếu [deps] thay đổi (sync => tuần tự)
    - gọi useEffect callback (sync)
    - Render lại UI
=> useLayoutEffect áp dụng trong trường hợp check điều kiện set lại state để hiển thị UI


========== useRef ==================
  - Lưu các giá trị tham chiếu ra bên ngoài function component


========== memo ==================
- Tránh trường hợp component render lại không cần thiết khi dữ liệu ở component con không thay đổi

========== useCallback ==================
- tránh tạo ra 1 function khi không cần thiết
- khi component con ko dùng memo thì ko cần dùng useCallback => tránh lạm dụng code
- khi sử dụng memo mà chuyền function làm đối số thì dùng useCallback hết

========== useMemo ==================
- tránh redender lại 1 hàm tính toán không cần thiết

========== useReducer ==================
- chức năng giống useState - useState làm được gì thì useReducer đều làm được và ngược lại
- useReducer sử dụng cho kiểu dữ liệu phức tạp

*  Sử  dụng
 1. useState
    - init state
    - Action: Up(state + 1) / Down(state - 1)
  2. useReducer
    - init state
    - Action: Up(state + 1) / Down(state - 1)
    - Reducer
    - dispatch

============== CSS Module ==================
- sử dụng: file_name.module.css
- tránh ảnh hưởng css của các file trong component khác
- nên viết class dưới dạng camleCase => dễ sử dụng trong file js
- không áp dụng với các tag (h1, h2.., span..), *
- nên dùng cssGlobal kết hợp với css module