import * as React from 'react';
import { Button as GuiButton, styled } from '@hanzo/gui';
import { Loader2 } from 'lucide-react';

/**
 * gui's Button, retuned. It is the right base rather than a stack with a
 * `tag` on it: gui renders it as a real `<button type="button">` and splits the
 * frame from the label itself, so a string child is wrapped in text and an icon
 * child is left alone — which is exactly what these call sites pass.
 *
 * The variants are gui's, not a class string handed to a merge function: the
 * shadcn original carried 40 Tailwind class names per variant against a build
 * that has never had Tailwind in it, so `bg-primary`, `hover:bg-primary/90` and
 * `focus-visible:ring-1` were all inert and the button drew as unstyled text.
 */
const Button = styled(GuiButton, {
  name: 'Button',
  rounded: 9999,
  borderWidth: 1,
  borderColor: 'transparent',
  fontWeight: '500',
  pressStyle: { scale: 0.98 },
  focusVisibleStyle: { outlineWidth: 2, outlineStyle: 'solid', outlineColor: 'var(--ring)' },

  variants: {
    variant: {
      default: {
        bg: 'var(--berry)',
        color: 'var(--primary-foreground)',
        hoverStyle: { bg: 'var(--primary-hover)', borderColor: 'transparent' },
      },
      primary: {
        bg: 'var(--berry)',
        color: 'var(--primary-foreground)',
        hoverStyle: { bg: 'var(--primary-hover)', borderColor: 'transparent' },
      },
      destructive: {
        bg: '#b91c1c',
        color: '#ffffff',
        hoverStyle: { bg: '#991b1b', borderColor: 'transparent' },
      },
      outline: {
        bg: 'rgba(255,255,255,0.72)',
        color: 'var(--ink)',
        borderColor: 'var(--border-strong)',
        hoverStyle: { bg: '#ffffff', borderColor: 'var(--ink)' },
      },
      secondary: {
        bg: '#ffffff',
        color: 'var(--ink)',
        borderColor: 'var(--border)',
        hoverStyle: { bg: '#ffffff', borderColor: 'var(--border-strong)' },
      },
      ghost: {
        bg: 'transparent',
        color: 'var(--ink)',
        hoverStyle: { bg: 'rgba(10,10,10,0.05)', borderColor: 'transparent' },
      },
      /* A link is a link: no fill, no edge, and no underline — this site carries
         none, and design's base layer already hands running-text anchors one on
         hover. */
      link: {
        bg: 'transparent',
        color: 'var(--berry)',
        borderColor: 'transparent',
        px: 0,
        hoverStyle: { bg: 'transparent', borderColor: 'transparent' },
      },
      linkFG: {
        bg: 'transparent',
        color: 'var(--ink)',
        borderColor: 'transparent',
        px: 0,
        hoverStyle: { bg: 'transparent', borderColor: 'transparent' },
      },
      linkMuted: {
        bg: 'transparent',
        color: 'var(--text-tertiary)',
        borderColor: 'transparent',
        px: 0,
        hoverStyle: { bg: 'transparent', color: 'var(--ink)', borderColor: 'transparent' },
      },
    },

    /* 44px is @hanzo/design's --tap-target and the height every control on the
       fleet's surfaces settles at. */
    size: {
      default: { height: 44, px: '$5', fontSize: 15 },
      sm: { height: 36, px: '$4', fontSize: 13 },
      lg: { height: 52, px: '$6', fontSize: 17 },
      icon: { height: 44, width: 44, px: 0 },
    },
  } as const,

  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ButtonBoxProps = React.ComponentProps<typeof Button>;

export interface ButtonProps extends ButtonBoxProps {
  isLoading?: boolean;
}

/** The spinner, which is the one behaviour the shape adds to the frame. */
const LoadingButton = Button.styleable<ButtonProps>(
  ({ isLoading = false, size, children, disabled, ...props }, ref) => (
    <Button ref={ref} size={size} disabled={disabled || isLoading} {...props}>
      {isLoading ? <Loader2 className='h-4 w-4 animate-spin' /> : null}
      {isLoading && size === 'icon' ? null : children}
    </Button>
  )
);
LoadingButton.displayName = 'Button';

export { LoadingButton as Button };
export default LoadingButton;
