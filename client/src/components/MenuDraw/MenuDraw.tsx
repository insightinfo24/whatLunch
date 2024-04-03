import React, { useCallback, useState } from 'react'
import { menusState } from '../../recoil/menu'
import { useRecoilValue } from 'recoil';
import { MenuTypes } from '../../recoil/menu';
import Swal from 'sweetalert2';
import _ from 'lodash';
import './MenuDraw.scss';
import LoadingModal from '../../components/MenuModal/LoadingModal';

const MenuDraw = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const menus = useRecoilValue<MenuTypes[]>(menusState);

  const startDraw = useCallback((): void => {
    const menuList = _.filter(menus, function (e) { return e.isExclude === false; });

    if (menuList.length < 3) {
      Swal.fire({
        title: "메뉴가 3가지 이상 있어야 합니다!",
        width: "30%",
      })
      return;
    }
    
    setIsLoading(true);

    // let sum = 0;
    // menuList.map((item) => {
    //   sum += item.weight;
    // })

    // let randomNum = Math.random() * sum;
    // let i = 0;
    // for (; i < menuList.length; i++) {
    //   if (randomNum - menuList[i].weight < 0) {
    //     break;
    //   } else {
    //     randomNum = randomNum - menuList[i].weight;
    //   }
    // }

    // 메뉴 중 3가지 항목 결정
    
    
    const weightedArray: string[] = [];

    menuList.forEach(item => {
      for (let i = 0; i < item.weight; i++)
        weightedArray.push(item.contents);
    });

    const drawMenu: string[] = [];

    // console.log(weightedArray);
      let isVal: any;
      for (let j = 0; j < 3; j++) {
        while (1) {
          isVal = _.sample(weightedArray);
          if (!drawMenu.includes(isVal)) {
            drawMenu.push(isVal);
            break;
          }
        }
      }
      console.log(drawMenu);

    // const drawMenu = _.sampleSize(menuList, 3);
        
    setTimeout(() => {
      setIsLoading(false);
      // 3가지 항목 중 한가지 메뉴 추첨해서 붉은글씨로 표시
      const ranNum = _.sample([0, 1, 2]);
      // console.log(ranNum);

      let htmlString = "<div style='font-family:yg-jalnan; font-size:32px;'>";

      htmlString += ranNum === 0 ? "<span style='color:red;'>1. " : "<span>1. ";
      htmlString += drawMenu[0] + "</span><br>";
      htmlString += ranNum === 1 ? "<span style='color:red;'>2. " : "<span >2. ";
      htmlString += drawMenu[1] + "</span><br>";
      htmlString += ranNum === 2 ? "<span style='color:red;'>3. " : "<span >3. ";
      htmlString += drawMenu[2] + "</span></div>";
      
      // Swal.fire({
      //   title: "<span style='font-size:40px'>TODAY</span>",
      //   html: ranNum[0] === 0  ? "<span style='font-size:26px; color:red;'>1. " : "<span style='font-size:26px'>1. " + drawMenu[0].contents + "</span>"
      //     + "<br><span style='font-size:26px'>2. " + drawMenu[1].contents + "</span>"
      //     + "<br><span style='font-size:26px'>3. " + drawMenu[2].contents + "</span>",
      //   width: "20%",
      //   confirmButtonText: "확인",
      // })

      Swal.fire({
        title: "<span style='font-size:55px; font-family:yg-jalnan;'>TODAY</span>",
        html: htmlString,
        width: "20%",
        confirmButtonText: "확인",
      })
    }, 2000);

  }, [menus]) 

  
  return (
    <>
      <button
        className='MenuDraw-Button'
        onClick={startDraw}
      >
        {"DRAW!!"}
      </button>

      {
        isLoading &&
        <LoadingModal
          setIsLoading={setIsLoading}
        />
      }
    </>
  )
}

export default MenuDraw