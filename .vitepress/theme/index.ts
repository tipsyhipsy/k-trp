import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './checklist.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof window !== 'undefined') {
      // Enable checkbox interaction and persist state via localStorage
      const STORAGE_KEY = 'checklist-state'

      function getState(): Record<string, boolean> {
        try {
          return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
        } catch {
          return {}
        }
      }

      function saveState(state: Record<string, boolean>) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
      }

      function getCheckboxId(checkbox: HTMLInputElement, index: number): string {
        const label = checkbox.parentElement?.textContent?.trim() || ''
        return `cb-${label.slice(0, 40)}-${index}`
      }

      function setupCheckboxes() {
        const checkboxes = document.querySelectorAll<HTMLInputElement>(
          '.vp-doc input[type="checkbox"]'
        )
        const state = getState()

        checkboxes.forEach((cb, i) => {
          const id = getCheckboxId(cb, i)
          cb.disabled = false
          cb.checked = state[id] ?? cb.checked

          // Remove old listeners by cloning
          const newCb = cb.cloneNode(true) as HTMLInputElement
          cb.parentNode?.replaceChild(newCb, cb)
          newCb.disabled = false

          newCb.addEventListener('change', () => {
            const currentState = getState()
            currentState[id] = newCb.checked
            saveState(currentState)
          })
        })
      }

      // Run on initial load and on route change
      const observer = new MutationObserver(() => {
        setupCheckboxes()
      })

      const trySetup = () => {
        setupCheckboxes()
        const content = document.querySelector('.vp-doc')
        if (content) {
          observer.observe(content, { childList: true, subtree: true })
        }
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', trySetup)
      } else {
        trySetup()
      }

      // Re-run on SPA navigation
      window.addEventListener('hashchange', setupCheckboxes)
    }
  }
} satisfies Theme
