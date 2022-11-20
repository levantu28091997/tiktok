import { forwardRef, useState } from 'react'
import classNames from 'classnames'
import styles from './Image.module.scss'
import images from '~/assets/images'

const Image = forwardRef(({ src, alt, className, fallback: customFallBack = images.noImage, ...props }, ref) => {
    const [fallback, setFallBack] = useState('')
    const handleError = () => {
        setFallBack(customFallBack)
    }
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    )
})

export default Image
