# react-mui

1. npx create-react-app . --template typescript

2. npm install @mui/material @emotion/react @emotion/styled

Notes:

1. Typography

- h1 to h6
- variant - subtitle1, subtitle2 > h6 tags
- variant - body1, body2 > p tags
- variant - body1 = without variant
- component - h1 = irrespective of variant, h1 tag is displayed
- gutterBottom = gives margin bottom

2. Button

- variant - text, contained, outlined
- color - primary, secondary, error, warning, info, success
- size - small, medium, large
- icons: - startIcon, endIcon, IconButton
- others - disableElevation, disableRipple

a. ButtonGroup

- orientation - vertical
- aria-label recommended
- variant, size, color

b. ToggleButton
- ToggleButtonGroup, ToggleButton
- Same as ButtonGroup contents above
- exclusive

3. TextField (Forms)
- variant - outlined, filled, standard, 
- required, error, helpertext, disabled, type
- InputProps - startAdornment, endAdornment

4. Select

5. RadioButton

6. CheckBox

7. Switch

8. Rating

9. Autocomplete

10. Box