interface SectionHeadingProps {
  eyebrow: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
}

export function SectionHeading({ eyebrow, title, intro, align = 'left', theme = 'light' }: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align} section-heading--${theme}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-heading__intro">{intro}</p> : null}
    </header>
  )
}
