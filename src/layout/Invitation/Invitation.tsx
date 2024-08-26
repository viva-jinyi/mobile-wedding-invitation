import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;

  const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    '이진 💍 장수환\n결혼합니다!',
  )}&dates=20241109T080000Z/20241109T090000Z&details=${encodeURIComponent(
    '저희답게 살겠습니다.\n부부로서 첫걸음을 내딛는 순간에\n소중한 분들을 초대합니다.',
  )}&location=${encodeURIComponent('파티움하우스 수원')}`;

  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      <RoundButton target="_blank" href={googleCalendarURL} rel="noreferrer">
        구글 캘린더 추가하기
      </RoundButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
