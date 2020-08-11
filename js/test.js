function calcRate(r) {
    const f = ~~r,//Tương tự Math.floor(r)
    id = 'star' + f + (r % f ? 'half' : '')
    id && (document.getElementById(id).checked = !0)
   }

   function sortListDirA() {
    // khai báo các biến cần thiết
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("id01");
    // gán biến switching đại diện cho việc có tiếp tục kiểm tra hay không
    switching = true;
    //thiết lập kiểu sắp xếp, đầu tiên là tăng dần
    dir = "asc"; 
    // Sử dụng vòng lặp cho đến khi nào switching = false
    while (switching) {
      // Gán lại biến switching = false
      switching = false;
      // lấy danh sách các thẻ li chứa giá trị cần sắp xếp
      b = list.getElementsByTagName("LI");
      // lặp qua tất cả các phần tử li
      for (i = 0; i < (b.length - 1); i++) {
        /* gán giá trị cho biến shouldSwitch đại diện cho việc có đổi vị trí của 2 phần
        tử liền kề hay không */
        shouldSwitch = false;
        /*so sánh giá trị 2 phần tử gần kề tùy vào kiểu sắp xếp*/
        if (dir == "asc") {
          // Kiểu sắp xếp tăng dần
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            /* Nếu phần tử đứng trước lớn hơn phần tử đứng sau thì gán
            giá trị cho biến shouldSwitch = true để đổi vị trí
            và thoát khỏi vòng lặp*/
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          // Kiểu sắp xếp giảm dần
          if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
            /* Nếu phần tử đứng trước nhỏ hơn phần tử đứng sau thì gán
            giá trị cho biến shouldSwitch = true để đổi vị trí
            và thoát khỏi vòng lặp*/
            shouldSwitch= true;
            break;
          }
        }
      }
      // kiểm tra biến shouldSwitch
      if (shouldSwitch) {
        /* Nếu shouldSwitch = true thì đổi vị trí hai phần tử hiện tại
        và tiếp tục lặp lại vòng lặp while */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        // mỗi lần đổi vị trí tăng biến switchcount lên 1 đơn vị
        switchcount ++;
      } else {
        /* Nếu chưa đổi chỗ bất kì phần tử nào và kiểu sắp xếp là "asc" thì đổi
        kiểu sắp xếp thành "desc" và thực hiện lại vòng lặp while*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }