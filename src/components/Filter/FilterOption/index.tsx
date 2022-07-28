import * as S from './styled'

interface IFilterOptionProps {
  title: string
}

const FilterOption = ({ title }: IFilterOptionProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.RangeWrapper>
        <S.RangeLines>
          {[0, 1, 2, 3, 4, 5, 6].map((line) => (
            <div className="line" key={line}></div>
          ))}
        </S.RangeLines>
        <S.Range type="range" min="1" max="100" defaultValue="50" id="test" />
      </S.RangeWrapper>
    </S.Wrapper>
  )
}

export default FilterOption
