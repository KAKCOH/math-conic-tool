import lecture1_1 from './node-1-1';
import lecture1_2 from './node-1-2';
import lecture1_3 from './node-1-3';
import lecture1_4 from './node-1-4';
import lecture2_1 from './node-2-1';
import lecture2_2 from './node-2-2';
import lecture2_3 from './node-2-3';
import lecture2_4 from './node-2-4';
import lecture2_5 from './node-2-5';
import lecture3_1 from './node-3-1';
import lecture3_2 from './node-3-2';
import lecture3_3 from './node-3-3';
import lecture3_4 from './node-3-4';
import lecture3_5 from './node-3-5';
import lecture3_6 from './node-3-6';
import lecture3_7 from './node-3-7';
import lecture4_1 from './node-4-1';

export const lectures: Record<string, string> = {
  '1.1': lecture1_1,
  '1.2': lecture1_2,
  '1.3': lecture1_3,
  '1.4': lecture1_4,
  '2.1': lecture2_1,
  '2.2': lecture2_2,
  '2.3': lecture2_3,
  '2.4': lecture2_4,
  '2.5': lecture2_5,
  '3.1': lecture3_1,
  '3.2': lecture3_2,
  '3.3': lecture3_3,
  '3.4': lecture3_4,
  '3.5': lecture3_5,
  '3.6': lecture3_6,
  '3.7': lecture3_7,
  '4.1': lecture4_1,
};

export function getLecture(nodeId: string): string {
  return lectures[nodeId] || '讲义内容正在编写中……';
}
