import React, { Component } from "react";
import MenuItem from "./MenuItem";

const reserveMenu = [
  { id: 1, message: "예약메뉴1" },
  { id: 2, message: "예약메뉴2" },
  { id: 3, message: "예약메뉴3" },
  { id: 4, message: "예약메뉴4" },
];

var timer;

class MenuItemList extends Component {
  constructor(props) {
    super(props);
    //state는  컴포넌트의 생명주기 동안 변경될 수 있는 data를 저장하고 관리하는데 사용
    //menu라는 배열객체를  사용할것이다고 적어놓음
    this.state = {
      menu: [],
    };
  }

  componentDidMount() {
    const { menu } = this.state;

    timer = setInterval(() => {
      if (menu.length < reserveMenu.length) {
        const index = menu.length;
        menu.push(reserveMenu[index]);
        this.setState({
          //menu에 빈 배열객체를 부여
          menu: menu,
        });
      } else {
        clearInterval(timer);
        // this.setState({
        //   menu: [],
        // });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.menu.map((menu) => {
          return <MenuItem key={menu.id} id={menu.id} message={menu.message} />;
        })}
      </div>
    );
  }
}

export default MenuItemList;
