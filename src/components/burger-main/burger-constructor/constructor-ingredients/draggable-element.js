import React from 'react'
import { useDispatch } from 'react-redux'
import { useDrag, useDrop } from "react-dnd";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import './draggable-element.scss'
import { REPLACE_ITEMS, DELETE_INGREDIENT } from '../../../../services/actions/constructor'
import { DECREASE_ITEM_COUNTER } from '../../../../services/actions/ingredients'

const DraggableElement = (props) => {
    const { _id, name, price, image_mobile, index, hash} = props

    const dispatch = useDispatch()

    const ref = React.useRef()

    const [{isDrag}, drag] = useDrag({
        type: "replaceObj",
        item: {_id, index},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    const [{isHover}, drop] = useDrop({
        accept: "replaceObj",
        hover: (item, monitor) => {
            if (!ref.current) { return }
            const dragIndex = item.index;
            const hoverindex = index
            if(dragIndex === hoverindex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if(dragIndex < hoverindex && hoverClientY < hoverMiddleY ) {
                return
            }
            if (dragIndex > hoverindex && hoverClientY > hoverMiddleY ) {
                return
            }
            replaceItem(dragIndex, hoverindex)

            item.index = hoverindex
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    })

    const replaceItem = (dragIndex, hoverIndex) => {
        dispatch({
            type: REPLACE_ITEMS,
            payload: {
                dragIndex,
                hoverIndex
            }
        })
    }

    const handleDeleteItem = () => {
        dispatch({
            type: DELETE_INGREDIENT,
            hash
        })
        dispatch({
            type: DECREASE_ITEM_COUNTER,
            id: _id
        })
    }

    drag(drop(ref))

    return ( <div className={`${isDrag && 'draggable'} ${!isDrag && isHover && 'hover'} constructorElement__item`} ref={ref}>
            <button className="element__dragicon">
                <DragIcon type="primary" />
            </button>

            <ConstructorElement
                text={name}
                price={price}
                thumbnail={image_mobile}
                handleClose={handleDeleteItem}
                />
        </div>
    )
}

DraggableElement.propTypes = {
    __v: PropTypes.number.isRequired,
    _id: PropTypes.any.isRequired,
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    hash: PropTypes.any.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
}

export default DraggableElement;
