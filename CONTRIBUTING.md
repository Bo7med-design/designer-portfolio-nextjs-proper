# Contributing to Ahmed El-Baghdady Portfolio

Thank you for your interest in contributing to this portfolio project! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

1. **Check existing issues** first to avoid duplicates
2. **Use the issue template** when creating new issues
3. **Provide detailed information** including:
   - Browser and version
   - Operating system
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Enhancements

1. **Check the roadmap** in README.md to see if it's already planned
2. **Open an issue** with the "enhancement" label
3. **Describe the enhancement** in detail:
   - What problem does it solve?
   - How would it work?
   - Any implementation ideas?

### Code Contributions

#### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- Basic knowledge of Next.js, TypeScript, and Tailwind CSS

#### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/designer-portfolio-nextjs-proper.git
   cd designer-portfolio-nextjs-proper
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

#### Code Standards

##### TypeScript
- Use strict TypeScript mode
- Define proper types for all props and functions
- Avoid `any` type unless absolutely necessary
- Use meaningful variable and function names

##### React/Next.js
- Use functional components with hooks
- Implement proper error boundaries
- Follow React best practices for performance
- Use Next.js Image component for all images
- Implement proper SEO metadata

##### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use CSS custom properties for theme values
- Ensure accessibility (WCAG 2.1 AA compliance)

##### Performance
- Lazy load non-critical components
- Optimize images and assets
- Minimize bundle size
- Follow Core Web Vitals guidelines
- Use proper caching strategies

#### Code Review Process

1. **Self-review** your code before submitting
2. **Run tests** and ensure they pass:
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```
3. **Test on multiple devices** and browsers
4. **Submit a pull request** with:
   - Clear description of changes
   - Screenshots for UI changes
   - Performance impact assessment
   - Breaking changes documentation

#### Pull Request Guidelines

##### Title Format
```
type(scope): description

Examples:
feat(gallery): add image zoom functionality
fix(mobile): resolve navigation menu overflow
docs(readme): update installation instructions
perf(images): optimize loading performance
```

##### Description Template
```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tested on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Tested on mobile devices (iOS Safari, Chrome Mobile)
- [ ] Verified accessibility compliance
- [ ] Performance impact assessed

## Screenshots
Include screenshots for UI changes

## Checklist
- [ ] Code follows the project's style guidelines
- [ ] Self-review completed
- [ ] Code is properly commented
- [ ] Tests pass locally
- [ ] Documentation updated if needed
```

## 🎨 Design Guidelines

### Visual Design
- Maintain consistent branding and color scheme
- Follow the established typography hierarchy
- Ensure proper contrast ratios for accessibility
- Use consistent spacing and layout patterns

### Animation Guidelines
- Use subtle, purposeful animations
- Respect user preferences (prefers-reduced-motion)
- Maintain 60fps performance
- Keep animation durations reasonable (200-500ms for most interactions)

### Responsive Design
- Mobile-first approach
- Test on various screen sizes (320px to 2560px+)
- Ensure touch targets are at least 44px
- Optimize for both portrait and landscape orientations

## 📊 Performance Standards

### Core Web Vitals Targets
- **FCP (First Contentful Paint)**: < 1.8s
- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **INP (Interaction to Next Paint)**: < 200ms

### Bundle Size Limits
- First Load JS: < 200kB
- Individual pages: < 50kB additional
- Images: Properly optimized WebP/AVIF formats

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Forms function properly
- [ ] Images load and display correctly
- [ ] Animations are smooth
- [ ] Accessibility features work
- [ ] Performance meets standards

### Browser Testing
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Documentation

### Code Documentation
- Comment complex logic and algorithms
- Document component props with JSDoc
- Explain non-obvious design decisions
- Update README.md for new features

### Commit Messages
Follow conventional commits format:
```
type(scope): description

feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: code restructuring
perf: performance improvements
test: add or update tests
chore: maintenance tasks
```

## 🚀 Release Process

1. **Version Bump**: Update version in package.json
2. **Changelog**: Update CHANGELOG.md with new changes
3. **Testing**: Comprehensive testing across all supported browsers
4. **Build**: Verify production build works correctly
5. **Deploy**: Deploy to staging for final verification
6. **Release**: Create GitHub release with proper tags

## 📞 Getting Help

- **Issues**: Use GitHub issues for bug reports and feature requests
- **Discussions**: Use GitHub discussions for questions and ideas
- **Email**: Contact ahmed@example.com for urgent matters

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to make this portfolio even better! 🎉