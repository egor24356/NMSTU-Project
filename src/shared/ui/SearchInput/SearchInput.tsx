import cls from './SearchInput.module.scss';
import { classNames } from 'shared/aliases/classNames';
import { FC, InputHTMLAttributes } from 'react';

import { Search } from '../icons';

export enum SearchInputTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export enum SearchInputMagnifierPos {
    START = 'start',
    END = 'end'
}

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    theme?: SearchInputTheme,
    magnifierPos?: SearchInputMagnifierPos
}

export const SearchInput: FC<SearchInputProps> = (props) => {

    const {
        className,
        theme = SearchInputTheme.PRIMARY,
        magnifierPos = SearchInputMagnifierPos.START,
        ...otherProps
    } = props;

    return <div className={classNames(cls.Search, {}, [className, cls[theme], cls[magnifierPos]])}>
        <input
            className={classNames(cls.SearchInput, {}, [className, cls[theme]])}
            {...otherProps}
        />
        <Search />
    </div>
}