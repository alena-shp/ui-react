import React, { useMemo, AnchorHTMLAttributes, forwardRef } from 'react';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

type TNative = AnchorHTMLAttributes<HTMLAnchorElement>;

export interface IProps {
    /**
     * Позволяет задавать дополнительные классы для стилизации элемента.
     */
    className?: TStyle | string,
    /**
     * Определяет предустановленный стиль элемента навигации.
     */
    presetStyle?: 'default' | 'active',
    /**
     * Определяет, отключен ли элемент навигации
     */
    isDisabled?: boolean,
    /**
     * Задает текстовое описание, которое будет отображаться при наведении курсора на элемент навигации.
     */
    title?: TNative['title'],
    /**
     * Содержимое элемента
     */
    children?: TNative['children'],
    /**
     * Обработчик клика на элементе
     */
    onClick?: TNative['onClick'],
    /**
     * Адрес ссылки, на который будет осуществлен переход при клике
     */
    href?: TNative['href'],
    /**
     * Задает, в каком окне или фрейме должна быть загружена связанная с пунктом навигации страница, когда пользователь нажимает на этот пункт.
     */
    target?: TNative['target'],
    /**
     * Указывает, должен ли браузер загружать ресурс по ссылке, вместо того, чтобы отображать его в браузере.
     */
    download?: TNative['download']
}

/**
 * Компонент NavItem используется для создания элементов навигационного меню.
 * Он может содержать иконку, текст и/или другие дочерние элементы.
 */
export const NavItem = forwardRef<HTMLAnchorElement | null, IProps>(({ className, isDisabled, presetStyle = 'default', ...props }, ref) => {
    const cn = useClassnames(style, className);

    const title = useMemo(() => {
        if(props.title) {
            return props.title;
        }

        if(typeof props.children === 'string') {
            return props.children;
        }
    }, [props.title, props.children]);

    return (
        <a
            {...props}
            ref={ref}
            className={cn('nav-item', {
                [`nav-item_preset-${presetStyle}`]: presetStyle,
                'nav-item_disabled'               : isDisabled
            })}
            title={title}
        />
    );
});
