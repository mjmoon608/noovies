# React Hooks 간단 설명

리액트 훅은 리액트의 신박한 기능으로 state, component에 대한 것들을 많이 바꿔놈
결론적으로 말하면, fucntional component에서 state를 가질 수 있게 해줌

useState는 항상 2개의 value를 return함.

- 첫 번째 인자는 item의 값을 정해주고
- 두 번째 인자는 값을 변경하게 함.
- useState는 하나는 value, 두 번째는 이를 변경하는 방법을 가짐. -> state와 그걸 처리하는 함수를 생성하는 것

```
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <p>{count}</p>
    <button onClick={() => setCount(count +1)}>Increase</button>
    </div>
  );
}
```

또한 이렇게 간단하게 class componenet에서의 작업을 fucntion compoenent에서 작성할 수 있음.

useEffect는 component did mount, did update, will unMount임. 주로 API에서 데이터를 요청할 때 사용.
-> componentDidMount의 역할을 해서 새로고침을 하면 함수를 실행시킴.
-> componentDidUpdate의 역할도 하기 때문에 이벤트 설정을 했을 때에도 함수를 발행시킴.

==> 첫 번째 인자는 이벤트 함수가 오면 됨.
useEffect(did Mount때 실행되고 did Update때도 실행될 함수)
useEffect(실행할 함수, []) -> 빈 array로 두게되면 어떤 변화에도 상관없이 한 번만 실행됨
useEffect(did Mount때 실행되고 did Update때도 실행될 함수, [변화가 일어나서 did Update를 실행할 대상])
[] 에 어떤 대상을 넣고 그 대상이 변한다면 함수는 실행될 것.

==> hooks은 react의 state machine에 연결하는 기본적인 방법.
Code SandBox는 온라인에서 작업하는 환경

React Hook README에 기록할 내용

useTitle은 react document의 title을 몇 개의 hooks와 함께 바꾸는 것

useInput은 그냥 input 열할을 하는거

usePageLeave는 유저가 page를 벗어나는 시점을 발견하고 함수를 실행

useClick은 누군가 element를 클릭하는 시점을 발겮

useFadeIn은 어떤 element든 상관없이 애니메이션을 element 안으로 서서히 사라지게 만듦

useFullscreen은 어떤 element든 풀스크린으로 만들거나 일반 화면으로 돌아가게 함

useHover는 어떤 것에 마우스를 올렸을 때 감지

useNetwork는 Online 또는 Offline 상태를 감지

useNotification은 notification API를 사용할 때 유저에게 알림을 보내주고

useScroll은 스크롤을 사용할 때를 감지해 알려주고

useTabs는 웹사이트에 메뉴 또는 무엇이든간에 tab을 사용하기 매우 쉽게 만들어 주는 것

usePreventLeave는 유저가 변경사항이나 무엇이든간에 저장하지 않고 페이지를 벗어나길 원할 때 확인하는 것

useConfirm은 usePreventLeava랑 비슷한데 어떤 기능이 존재하는것

useAxios는 HTTP requests client axios를 위한 wrapper 같은 것

## 1.1 cacheImages

- https://unsplash.com/

- AppLading

  - https://docs.expo.io/versions/latest/sdk/app-loading/
  - application을 실행할 때 마다 어떤걸 로드하고 싶을 때 사용
  - 이미지나 폰트 등 미리 로드(preload)하고 싶을 때 사용
  - API를 호출하거나 사용자를 얻는 등에도 사용 가능함.

- Asset
  - https://docs.expo.io/versions/v37.0.0/sdk/asset/
  - external module 임
  - 기본적으로 너가 assets폴더에 접근 할수 있게 해줌

## 1.2 cacheFonts

- expo - vector-icons : https://icons.expo.fyi/ -> 아이콘 종류
- https://docs.expo.io/guides/icons/#expovector-icons -> expo 문서

## 1.3 Stack Navigation

- https://reactnavigation.org/docs/hello-react-navigation
- React Navigation을 사용할 거임

- Stack Navigation : 모든 것들의 맨 위로 새로운 카드가 올라옴.

- https://reactnavigation.org/docs/navigation-prop/
- Stack Navigation에서 Screen이 가지는 props
  - addListener : 네비게이터의 이벤트 업데이트 구독
  - canGoBack
  - dangerouslyGetParent
  - dangerouslyGetState
  - dispatch : 액션을 라우터로 보내기
  - goBack : 활성 화면을 닫고 스택으로 다시 이동
  - isFocused : 화면 초점이 맞았는지 확인
  - navigate : 다른 화면으로 이동하여 수행해야 할 작업을 파악하십시오.
  - pop
  - popToTop
  - push
  - removeListener
  - replace
  - reset : 네비게이터 상태를 지우고 새 경로로 교체
  - setOptions : 화면 옵션 업데이트 -> title 변경 등.
  - setParams : 경로 매개 변수 변경

## 1.4 Tabs Navigation

- https://reactnavigation.org/docs/bottom-tab-navigator

## 1.5 Updating Header part One

- navigator 안에 있는 모든 screen은 navigation prop을 가짐. 또한 route 라는 것도 가짐.
  - https://reactnavigation.org/docs/route-prop
  - route가 가지는 prop
    - key, name, params
- 이 navigation prop은 나에게 조종할 수 있도록 허용하는 것(button 달아서 스크린 이동 같은 것.) 뿐만 아니라 부모 navigator랑 소통할 수 있게도 해줌. -> 소통을 통해 부모 navigator의 header title을 변경 할 수 있음.

## 1.6 Updating Header part Two

- useLayoutEffect : useEffect와 비슷하지만 큰 차이점은 레이아웃 변경이 다 끝난후에 작동함.
- 아래 두개가 같은 것임.

```
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderName(),
    });
  });
  useEffect(() => {
    navigation.setOptions({
      title: getHeaderName(),
    });
  }, [route]);
```
