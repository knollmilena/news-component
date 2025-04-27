import { useState, useRef } from 'react';
import { Button, Typography } from 'antd';
import './Accordion.css';
import { IAccordionProps } from './Accordion.prop';
import { WhiteText } from '../../atoms/WhiteText/WhiteText';
import { MiniCard } from '../MiniCard/MiniCard';

export const Accordion = ({ news, count }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <Button type="text" onClick={toggleAccordion} className="accordion__button">
        <Typography.Text style={{ color: 'var(--light-grey)' }}>
          Duplicates: <WhiteText>{count}</WhiteText>
        </Typography.Text>

        <span className={`accordion__icon ${isOpen ? 'open' : ''}`}>▼</span>
      </Button>

      <div
        ref={contentRef}
        className={`accordion__content ${isOpen ? 'open' : ''}`}
        style={{
          height: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
        }}
      >
        <div className="accordion__inner">
          <MiniCard news={news} duplicatesCount={5} />
        </div>
      </div>
    </div>
  );
};
