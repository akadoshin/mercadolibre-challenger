import { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

/** Wrapper render element with BrowserRouter to use react-router-dom components */
const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: BrowserRouter, ...options });

export * from '@testing-library/react';
export { customRender as render };
