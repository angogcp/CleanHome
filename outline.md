# 🧹 House Cleaning Service App - Project Outline

## 📁 File Structure

```
/mnt/okcomputer/output/
├── index.html              # Landing page with service selection
├── booking.html            # Booking flow (3-step process)
├── confirmation.html       # Booking success page
├── admin.html             # Admin dashboard
├── login.html             # Admin login page
├── main.js                # Core JavaScript functionality
├── resources/             # Assets folder
│   ├── hero-bg.jpg        # Hero section background
│   ├── service-cleaning.jpg    # Basic cleaning service
│   ├── service-deep.jpg        # Deep cleaning service
│   ├── service-move.jpg        # Move in/out service
│   ├── service-renovation.jpg  # Post-renovation service
│   ├── trust-badge.png         # 5 years experience badge
│   ├── coverage-map.png        # Service area illustration
│   ├── testimonial-1.jpg       # Customer testimonial photo
│   ├── testimonial-2.jpg       # Customer testimonial photo
│   ├── testimonial-3.jpg       # Customer testimonial photo
│   ├── admin-avatar.jpg        # Admin profile image
│   └── logo.png               # Company logo
├── interaction.md         # Interaction design documentation
├── design.md             # Design system documentation
└── outline.md            # This project outline
```

## 🗂️ Page Breakdown

### 1. index.html - Landing Page
**Purpose**: Convert visitors into bookings
**Sections**:
- Navigation bar with language toggle
- Hero section with compelling headline and CTA
- Service showcase (4 cards with hover effects)
- Coverage area visualization
- Trust indicators (5 years experience, customer count)
- Customer testimonials carousel
- Floating WhatsApp button
- Footer with contact info

**Key Features**:
- Service selection cards with pricing
- "Book Now" CTA leading to booking flow
- Multi-language support (BM, ID, EN)
- Mobile-optimized layout

### 2. booking.html - Booking Flow
**Purpose**: Complete booking in under 60 seconds
**3-Step Process**:
1. **Service & Home Size**
   - Service type selection (pre-filled from landing)
   - Home size selector (Small/Medium/Large)
   - Dynamic price calculation
   - Duration estimation

2. **When & Where**
   - Date picker with availability
   - Time slot selection (Morning/Afternoon)
   - Address form with area dropdown
   - Coverage validation
   - Special requests textarea

3. **Contact Details**
   - Full name input
   - Phone number with +60 prefix
   - WhatsApp verification checkbox
   - Alternative contact option

**Features**:
- Progress indicator
- Form data persistence
- Real-time validation
- Price calculation
- Coverage area checking

### 3. confirmation.html - Booking Success
**Purpose**: Confirm booking and set expectations
**Content**:
- Success animation (confetti effect)
- Booking reference number
- Summary of booking details
- Next steps timeline
- WhatsApp confirmation expectation
- Add to calendar button
- Return to home button

### 4. admin.html - Admin Dashboard
**Purpose**: Mobile-first booking management
**Sections**:
- Header with owner greeting and notifications
- Today's overview with quick stats
- Booking cards in timeline view
- Status management dropdown
- Quick action buttons (WhatsApp, Call, Edit)
- Bottom navigation (Today, All, Add, Settings)

**Features**:
- Status updates (Pending → Confirmed → In Progress → Completed)
- Customer communication shortcuts
- Booking management interface
- Mobile-optimized card layout

### 5. login.html - Admin Login
**Purpose**: Secure admin access
**Features**:
- Email and password fields
- "Remember me" checkbox
- Password reset option
- Simple, clean design
- Mobile-optimized form

## 🎯 Core Functionality (main.js)

### 1. Language Management
- Language toggle functionality
- Content translation system
- localStorage persistence
- Auto-detection based on browser settings

### 2. Booking Flow Logic
- Form data management
- Step navigation
- Validation system
- Price calculation
- Data persistence across steps

### 3. Interactive Components
- Service card selection
- Date picker functionality
- Status dropdown management
- Modal dialogs

### 4. Animation & Effects
- Page transition animations
- Hover effects
- Success animations
- Loading states

### 5. Data Management
- Booking data structure
- Customer information handling
- Admin dashboard data
- Local storage management

### 6. Utility Functions
- Date formatting
- Phone number validation
- Address verification
- Coverage area checking

## 🎨 Visual Assets Required

### Hero & Background Images
- **hero-bg.jpg**: Clean, modern home interior for hero section
- **coverage-map.png**: Simple illustration of Ipoh and 30km radius

### Service Images (4 services)
- **service-cleaning.jpg**: Basic cleaning service illustration
- **service-deep.jpg**: Deep cleaning service image
- **service-move.jpg**: Move in/out cleaning scenario
- **service-renovation.jpg**: Post-renovation cleaning

### Trust & Social Proof
- **trust-badge.png**: "5 Years Experience" visual badge
- **testimonial-1/2/3.jpg**: Customer photos for testimonials
- **admin-avatar.jpg**: Professional owner profile photo
- **logo.png**: Company logo design

## 🛠 Technical Implementation

### CSS Framework
- **Tailwind CSS**: Utility-first styling
- **Custom CSS**: Animations and special effects
- **Responsive Design**: Mobile-first approach

### JavaScript Libraries
- **Anime.js**: Smooth animations and transitions
- **Splide.js**: Testimonial carousel
- **ECharts.js**: Simple analytics charts (admin)
- **p5.js**: Background effects

### Data Structure
```javascript
// Booking Object Structure
{
  id: "IP-241012-001",
  service: "deep_cleaning",
  homeSize: "medium",
  date: "2024-10-15",
  time: "morning",
  customer: {
    name: "Sarah Lee",
    phone: "+6012-345-6789",
    whatsapp: true,
    address: "Taman Ipoh Jaya"
  },
  status: "confirmed",
  price: 180,
  duration: 4
}
```

## 🌟 User Experience Flow

### Customer Journey
1. **Landing** → Service awareness and trust building
2. **Service Selection** → Choose cleaning type
3. **Booking Details** → Schedule and location
4. **Contact Info** → Customer details
5. **Confirmation** → Booking success and next steps

### Admin Journey
1. **Login** → Secure dashboard access
2. **Dashboard Overview** → Today's bookings summary
3. **Booking Management** → Status updates and communication
4. **Customer Interaction** → WhatsApp/call integration

## 📱 Mobile Optimization

### Responsive Breakpoints
- **Mobile**: 320px - 768px (primary focus)
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Features
- Touch-optimized interactions
- Swipe gestures for status updates
- Bottom navigation for easy thumb access
- Optimized form layouts
- Fast loading with optimized images

## 🎯 Success Metrics

### Customer Goals
- Complete booking in under 60 seconds
- Clear service understanding
- Easy contact and communication
- Trust in service quality

### Admin Goals
- Manage bookings in under 10 minutes daily
- Clear daily schedule overview
- Easy customer communication
- Simple status management