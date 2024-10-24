import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoTimeline } from '@/components/logo-timeline'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { div, h1, p } from 'framer-motion/client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'One Notification simplifies email notification configuration and management for developers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-0 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl font-medium tracking-tight text-gray-950 sm:text-8xl md:text-9xl">
            Master Your Notifications.
          </h1>
          <p className="mt-8 max-w-lg text-xl font-medium text-gray-950/75 sm:text-2xl">
            One Notification is currently in development. Our platform simplifies email notifications now, with upcoming support for SMS and push notifications. 
          </p>
          <p className="mt-4 max-w-lg text-lg text-gray-950/75">
            Join our beta program to be the first to experience the latest features and help shape the future of notification management.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/beta-signup">Join Beta</Button>
            {/* <Button variant="secondary" href="/features">
              Learn more
            </Button> */}
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Customize and control your email notifications with ease.
        </Heading>
        <Screenshot
          width={1473}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Notification Management</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Everything you need to streamline your notifications.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Integration"
          title="Seamless API Connectivity"
          description="Integrate your apps effortlessly with our RESTful API and comprehensive libraries."
          graphic={
            <div className="h-80 bg-[url(/screenshots/api-integration.png)] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Customization"
          title="Personalized Notifications"
          description="Customize everything from timing to content, tailoring notifications to your needs."
          graphic={
            <div className="h-80 bg-[url(/screenshots/customize.png)] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Monitoring"
          title="Real-time Tracking"
          description="Monitor delivery status and analyze performance with our advanced dashboard."
          graphic={<Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Expansion"
          title="Future-Proof Features"
          description="Ready for SMS and push notifications, ensuring you're equipped for any communication needs."
          graphic={
            <div className="h-80 bg-[url(/screenshots/future.png)] bg-no-repeat" />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Scale"
          title="Scalable Solution"
          description="Efficiently scale your notification services as your business grows."
          graphic={<LogoTimeline />}
          className="lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark >Notification Management</Subheading>
        <Heading dark as="h3" className="mt-2 max-w-3xl">
          Everything you need to streamline your notifications.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
          dark
            eyebrow="Integration"
            title="Seamless API Connectivity"
            description="Integrate your apps effortlessly with our RESTful API and comprehensive libraries."
            graphic={
              <div className="h-80 bg-[url(/screenshots/api-integration.png)] bg-no-repeat" />
            }
            fade={['bottom']}
            className="lg:col-span-3 lg:rounded-tl-4xl"
          />
          <BentoCard
          dark
            eyebrow="Customization"
            title="Personalized Notifications"
            description="Customize everything from timing to content, tailoring notifications to your needs."
            graphic={
              <div className="h-80 bg-[url(/screenshots/customize.png)] bg-no-repeat" />
            }
            fade={['bottom']}
            className="lg:col-span-3 lg:rounded-tr-4xl"
          />
          <BentoCard
          dark
            eyebrow="Monitoring"
            title="Real-time Tracking"
            description="Monitor delivery status and analyze performance with our advanced dashboard."
            graphic={
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            }
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
          dark
            eyebrow="Expansion"
            title="Future-Proof Features"
            description="Ready for SMS and push notifications, ensuring you're equipped for any communication needs."
            graphic={
              <div className="h-80 bg-[url(/screenshots/future.png)] bg-no-repeat" />
            }
            className="lg:col-span-2"
          />
          <BentoCard
          dark
            eyebrow="Scale"
            title="Scalable Solution"
            description="Efficiently scale your notification services as your business grows."
            graphic={<LogoTimeline />}
            className="lg:col-span-2 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <FeatureSection />
          <DarkBentoSection />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
