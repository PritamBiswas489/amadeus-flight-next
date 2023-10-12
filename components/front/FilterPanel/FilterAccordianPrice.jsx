import React , {useEffect, useState} from 'react'
import MultiRangeSlider from "@/components/common/MultiRangeSlider";
import style from "@/pages/flight/search/index.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import { getCurrencySymbol, convertObjectToArray } from '@/service/Helpers';
import { filterFieldActions } from '@/store/redux/filter-field-slice';

export default function FilterAccordianPrice() {
  const   dispatch = useDispatch();
  const {maxPrice,minPrice} = useSelector((state)=>state['offerData']);   
  const {maxPrice:maxPriceValue,minPrice:minPriceValue} = useSelector((state)=>state['filterField']);   
  const {currencies} = useSelector((state)=>state['offerData'].dictionaries);
  const currency = convertObjectToArray(currencies);

  const [minData,setMinData] = useState(minPriceValue);
  const [maxData,setMaxData] = useState(maxPriceValue);
  

  useEffect(()=>{
    dispatch(filterFieldActions.setMaxPrice({
        maxPrice: maxData,
      }));
      dispatch(filterFieldActions.setMinPrice({
        minPrice: minData,
      }));
  },[minData,maxData])
  


  const setFilterCurrency = (min,max)=>{
    let minValue = min;
    let maxValue = max;
    if(maxValue >maxPrice ){
        maxValue = maxPrice;
    }
    setMinData(minValue);
    setMaxData(maxValue);
  }
  return (
    <div className="accordion-item">
    <h6 className="accordion-header" id="panelsStayOpen-headingSix">
        <button
            className="accordion-button "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseSix"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseSix"
        >
            Price
        </button>
    </h6>
    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingSix">
        <div className={`accordion-body  ${style.timesFlight}`}>
            <div className={style.sliderArea}>
                <p>{getCurrencySymbol(currency[0].key)}{minPriceValue} - {getCurrencySymbol(currency[0].key)}{maxPriceValue}</p>
                <MultiRangeSlider
                    min={minPrice}
                    max={maxPrice}
                    onChange={({min, max}) => {
                        setFilterCurrency(min,max);
                    }}
                />
            </div>
        </div>
    </div>
</div>
  )
}
