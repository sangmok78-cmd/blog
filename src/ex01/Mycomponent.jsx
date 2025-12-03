import React from 'react';

const Mycomponent = ({name, children}) => {     //props 부모의 props를 가져올수 있음  
     
    return (
        <div>
            안녕하세요 제 이름은 {name} 입니다.     
            children 값은 {children} 입니다.
        </div>
    );
};
Mycomponent.defaultProps={
    name:'기본이름'
}

export default Mycomponent;