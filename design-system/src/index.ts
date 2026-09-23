// 52Eighty Creative — component library barrel.

// Tokens & utilities
export { colors, font, text, radius, space, sectionSpace, shadow, ease, spring } from './tokens';
export type { ColorToken } from './tokens';
export { useHover, useFocus } from './utils/useHover';
export { useInView } from './utils/useInView';
export { useReducedMotion } from './utils/useReducedMotion';
export { projectTone } from './utils/tone';

// Actions
export { Button } from './components/Button/Button';
export type { ButtonVariant, ButtonSize } from './components/Button/Button';
export { Link } from './components/Link/Link';

// Navigation
export { Navbar } from './components/Navbar/Navbar';
export type { NavbarTone, NavbarLink, NavbarProps } from './components/Navbar/Navbar';
export { MobileMenu } from './components/Navbar/MobileMenu';
export type { MobileMenuProps, MobileMenuLink } from './components/Navbar/MobileMenu';

// Forms
export { Field, TextInput, SelectInput, TextAreaField } from './components/Field/Field';
export type {
  FieldProps,
  FieldType,
  FieldState,
  TextInputProps,
  SelectInputProps,
  TextAreaFieldProps,
} from './components/Field/Field';
export { NewsletterSignup } from './components/NewsletterSignup/NewsletterSignup';
export type { NewsletterSignupProps } from './components/NewsletterSignup/NewsletterSignup';
export { ContactForm } from './components/ContactForm/ContactForm';
export type { ContactFormProps } from './components/ContactForm/ContactForm';
export { ChoiceGrid } from './components/ChoiceGrid/ChoiceGrid';
export type { ChoiceGridProps, ChoiceOption } from './components/ChoiceGrid/ChoiceGrid';
export { StepProgress } from './components/StepProgress/StepProgress';
export type { StepProgressProps } from './components/StepProgress/StepProgress';

// Content
export { Card } from './components/Card/Card';
export type { CardVariant } from './components/Card/Card';
export { StatBar } from './components/Stats/StatBar';
export { AwardBadge } from './components/Stats/AwardBadge';
export { LogoMarquee } from './components/LogoMarquee/LogoMarquee';
export { Testimonial } from './components/Testimonial/Testimonial';
export type { TestimonialVariant } from './components/Testimonial/Testimonial';
export { SectionHeader } from './components/SectionHeader/SectionHeader';
export type { SectionHeaderVariant } from './components/SectionHeader/SectionHeader';

// Disclosure
export { Accordion } from './components/Accordion/Accordion';
export { Tabs } from './components/Tabs/Tabs';

// Overlays
export { Modal } from './components/Modal/Modal';
export { Toast, Toaster, ToastViewport, useToaster } from './components/Toast/Toast';
export type { ToastTone } from './components/Toast/Toast';

// Layout
export { Band, bandTones } from './components/Band/Band';
export type { BandProps, BandTone, BandPad, BandEdge, BandFrame, BandToneSpec } from './components/Band/Band';

// Marks
export { Wordmark } from './components/Marks/Wordmark';
export type { WordmarkProps } from './components/Marks/Wordmark';
export { Arch, archMedia } from './components/Marks/Arch';
export type { ArchProps } from './components/Marks/Arch';
export { Squiggle } from './components/Marks/Squiggle';
export type { SquiggleProps } from './components/Marks/Squiggle';
export { Starburst } from './components/Marks/Starburst';
export type { StarburstProps } from './components/Marks/Starburst';
export { Pill } from './components/Marks/Pill';
export type { PillProps, PillTone, PillSize } from './components/Marks/Pill';

// Footer
export { Footer } from './components/Footer/Footer';
