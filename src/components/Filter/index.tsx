import FilterOption from './FilterOption'
import * as S from './styled'

const Filter = () => {
  return (
    <S.Background>
      <S.FilterGroup>
        <S.FilterOption>
          <FilterOption title="Breed Count" />
        </S.FilterOption>
        <S.FilterOption>
          <FilterOption title="Legend" />
        </S.FilterOption>
        <S.FilterOption>
          <FilterOption title="Purity" />
        </S.FilterOption>
      </S.FilterGroup>
      <S.FilterActions>
        <S.FilterButton>Apply Filter</S.FilterButton>
      </S.FilterActions>
    </S.Background>
  )
}

export default Filter
