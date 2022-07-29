import { MutableRefObject } from 'react'
import * as S from './styled'

interface IFilterOptionProps {
  title: string
  filterRef: any
}

const FilterOption = ({ title, filterRef }: IFilterOptionProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.RangeWrapper>
        <S.RangeLines>
          {[0, 1, 2, 3, 4, 5, 6].map((line) => (
            <div className="line" key={line}></div>
          ))}
        </S.RangeLines>
        <S.Range
          type="range"
          min="0"
          max="3"
          defaultValue="2"
          id="test"
          ref={filterRef}
        />
      </S.RangeWrapper>
    </S.Wrapper>
  )
}

export default FilterOption
