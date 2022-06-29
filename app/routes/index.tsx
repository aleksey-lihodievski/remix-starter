import { useRecoilState, useRecoilValue } from 'recoil';
import Button from '~/components/Button';

import textState, { charCountState } from '~/recoil/example';

export default function Index() {
  const [text] = useRecoilState(textState);
  const charCount = useRecoilValue(charCountState);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <p>{text}</p>
      <p>{charCount}</p>
      <Button>hello</Button>
    </div>
  );
}
