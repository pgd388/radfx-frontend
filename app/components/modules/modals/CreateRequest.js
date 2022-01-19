import * as React from 'react';
import BigModal from '@/elements/BigModal';

export default function CreateRequestModal(props) {
    const { title, id, children, is_visible, toggleVisibility } = props

    return (
        <BigModal
            title={title}
            id={id}
            is_visible={is_visible}
            toggleVisibility={toggleVisibility}
        >{title}
        </BigModal>
    )
}
