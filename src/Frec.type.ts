import type {
  ClassAttributes,
  Component,
  ForwardRefExoticComponent,
  PropsWithRef,
  RefAttributes,
} from 'react'

export type ElementFrec<T extends keyof JSX.IntrinsicElements> =
  ForwardRefExoticComponent<PropsWithRef<JSX.IntrinsicElements[T]>>

export type Frec<
  T extends
    | Component
    | ForwardRefExoticComponent<any>
    | ClassAttributes<any>
    | keyof JSX.IntrinsicElements,
> =
  // クラスコンポーネント用
  T extends Component<infer P>
    ? ForwardRefExoticComponent<P & RefAttributes<T>>
    : // ref を持つ Props 用
    T extends ClassAttributes<any>
    ? ForwardRefExoticComponent<PropsWithRef<T>>
    : // タグ名用
    T extends keyof JSX.IntrinsicElements
    ? ElementFrec<T>
    : // ForwardRefExoticComponent 用
      T
