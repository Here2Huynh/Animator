# Animation for MUI Components

This library is written to provide predefined CSS animations to MUI components.
Technically, it can be used with any other React components that uses CSS.

## How It Works

This library will give you a provider called `Animator`. `Animator` takes in two props, `animation` and `render`.

- `animation` takes in a string that is the name of a predefined animation i.e. `scale` or `flipIn`
- `render` takes in any React component you want to render. It will also provide the given animation above its CSS styles in the form of a render prop. Add that render prop into the component's CSS and watch your component come to life.

  > Note: The render prop is the animation CSS object.

  > i.e. { animation: 'some animation styles'}

<!-- TODO: write the readme : how to, documentation -->

## Examples

Add animation to run `on load`:

```
<Animator
  animation={'bounce'}
  render={(animationSx) =>
    <Box
      sx={{
        bgcolor: blueGrey[400],
        width: 100,
        height: 100,
        ...animationSx,
      }}
    />
  }
/>
```

Add animation to run `on hover`:

```
<Animator
  animation={'scale'}
  render={(animationSx) =>
    <Box
      sx={{
        bgcolor: blueGrey[400],
        width: 100,
        height: 100,
        '&:hover' : {
          ...animationSx,
        }
      }}
    />
  }
/>
```

Customize an animation to your need:

```
<Animator
  animation={'blink'}
  overRides={
    {
      iterationCount: 2, // blink animation iterates 2 times
      duration: 1, // for 1 second each iteration
      timingFunc: ease, // animation speed of ease
    }
  }
  render={(animationSx) => <Box boxSx={animationSx} />}
/>
```

Available Override Properties

- duration - number of seconds
- timingFunc
  - linear
  - ease
  - ease-in
  - ease-out
  - ease-in-out
  - step-start
  - step-end
  - initial
  - inherit
  - steps(int,start-end)
  - cubic-bezier(n,n,n,n)
- fillMode
  - none
  - forwards
  - backwards
  - both
  - initial
  - inherit
- degrees - number of degrees animation is applied, works best with `Rotate`
- iterationCount - number of iterations the animation will occur

## List of Predefined Animations

- flipIn
- slitInVertical
- scale
- rotate
- vibrate
- blink
- heartBeat
- bounce
- zoomTop
- zoomBottom
- zoomLeft
- zoomRight
- scaleInHorizontalCenter
- expandIn
- contractIn
- expandOut
- contractOut
- focusIn
- focusInExpand
- focusInContract
- focusOut
- focusOutExpand
- focusOutContract

## Built With

- MUI
- CSS
- Vite
- Google
- Caffeine

<!-- TODO: add ts types to everything -->
<!-- TODO: add index exports -->
<!-- // NOTE: speedometer number rotation for loading -->
