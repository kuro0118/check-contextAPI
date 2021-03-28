import React from 'react'
import CounterContext from '../contexts/counter'

// chips: Providerで当コンポーネントはラップされているので、Consumerコンポーネントを使用することが可能。
//        createContextを使用したコンテキストコンポーネントを自前で作る必要があり。
//        Consumerコンポーネントでラップする場合は、関数を書く必要がある
//        親コンポーネントのProviderコンポーネント経由で送られてきたstateが引数を受け取ることが出来る。
const Counter = () => (
    <CounterContext.Consumer>
        {
            ({ count, increment, decrement }) => {
                return (
                    <React.Fragment>
                        <div>
                            count：{count}
                        </div>
                        <button onClick={increment}>+1
                        </button>
                        <button onClick={decrement}>-1
                        </button>
                    </React.Fragment>
                )
            }
        }
    </CounterContext.Consumer>
)

export default Counter;