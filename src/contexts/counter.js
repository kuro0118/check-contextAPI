import { createContext } from 'react';

// chips: コンテキストAPIを作成する。
// chips: デフォルトパラメータとして引数にオブジェクトを渡すことも出来る。
//        今回の演習ではAppコンポーネントのコンストラクタで初期化を行っているため、
//        省略している。
const CounterContext = createContext();
export default CounterContext;