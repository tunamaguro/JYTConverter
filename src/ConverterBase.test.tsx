import { describe, expect, test, vi } from 'vitest'

import { ConverterBase } from './ConverterBase'
import { render, screen, userEvent } from './test/utils'

describe('ConverterBase', () => {
  test('select要素を変更した際に、onchangeが呼ばれている', async () => {
    const mockFn = vi.fn()
    render(<ConverterBase onSelectorChange={mockFn} />)
    const select = screen.getByRole('combobox')
    await userEvent.selectOptions(select, 'YAML')
    expect(mockFn).toHaveBeenCalledOnce()
    expect(mockFn).toHaveBeenCalledWith('YAML')

    mockFn.mockReset()

    await userEvent.selectOptions(select, 'TOML')
    expect(mockFn).toHaveBeenCalledOnce()
    expect(mockFn).toHaveBeenCalledWith('TOML')
  })
})
