import { useRef } from 'react'
import FilterOption from './FilterOption'
import * as S from './styled'

interface FilterProps {
  updateBreedCount: (newValue: number) => void
  updateLegend: (newValue: number) => void
  updatePurity: (newValue: number) => void
}

const Filter = ({
  updateBreedCount,
  updateLegend,
  updatePurity,
}: FilterProps) => {
  const breedRef = useRef<HTMLInputElement>()
  const legendRef = useRef<HTMLInputElement>()
  const purityRef = useRef<HTMLInputElement>()

  const handleOnApplyFilter = () => {
    if (breedRef.current && legendRef.current && purityRef.current) {
      updateBreedCount(+breedRef.current?.value)
      updateLegend(+legendRef.current?.value)
      updatePurity(+purityRef.current?.value)
    }
  }

  return (
    <S.Background>
      <S.FilterGroup>
        <S.FilterOption>
          <FilterOption title="Breed Count" filterRef={breedRef} />
        </S.FilterOption>
        <S.FilterOption>
          <FilterOption title="Legend" filterRef={legendRef} />
        </S.FilterOption>
        <S.FilterOption>
          <FilterOption title="Purity" filterRef={purityRef} />
        </S.FilterOption>
      </S.FilterGroup>
      <S.FilterActions>
        <S.FilterButton onClick={handleOnApplyFilter}>
          Apply Filter
        </S.FilterButton>
      </S.FilterActions>
    </S.Background>
  )
}

export default Filter
