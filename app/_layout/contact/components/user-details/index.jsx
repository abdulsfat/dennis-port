'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper>
            <CldImage
              src='Portofolio/xlnuou4ovsatxqx7ntbr'
              className='rounded-full object-cover'
              fill={true}
              alt='Dennis Snellenberg Profile Picture'
            />
          </ImageWrapper>
          <MainTitle>Let’s work</MainTitle>
        </div>
        <div className='flex items-center justify-between'>
          <MainTitle>together</MainTitle>
          <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-[1px] bg-muted-foreground' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='/contact' passHref>
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <div>
            <a href='mailto:abdulfatahillah17@gmail.com'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground'
              >
                abdulfatahillah17@gmail.com
              </MagneticButton>
            </a>
          </div>
          <div>
            <a href='tel:+6281517343090'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground'
              >
                +62 815 1734 3090
              </MagneticButton>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}
