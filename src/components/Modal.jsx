import React from 'react';

function Modal() {
    return (
        <div>
            <h1>Modal</h1>
            <div>
                <button>Open Modal</button>
                <button>Open Modal</button>
            </div>

            <div>
                <div>
                    <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
                    <button>닫기</button>
                    <button>확인</button>
                </div>
            </div>

            <div>
                <div>
                    <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
                    <button>X</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
