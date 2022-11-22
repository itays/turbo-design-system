import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}
declare function Button(props: ButtonProps): JSX.Element;
declare namespace Button {
    var displayName: string;
}

export { Button, ButtonProps };
