package com.sist.memo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.memo.mapper.MemoMapper;
import com.sist.memo.vo.MemoVO;

@Service
public class MemoService {
    @Autowired
    private MemoMapper m_mapper;

    public int getCount(String searchType, String searchValue){
        return m_mapper.count(searchType, searchValue);
    }

    public MemoVO[] getList(String searchType, String searchValue, int begin, int end){
        MemoVO[] m_ar = null;

        List<MemoVO> m_list = m_mapper.memoList(searchType, searchValue, begin, end);

        if(m_list != null && m_list.size()>0){
            m_ar = new MemoVO[m_list.size()];
            m_list.toArray(m_ar);
        }

        return m_ar;
    }
    
    public MemoVO getMemo(String m_idx){
        return m_mapper.get_memo(m_idx);
    }

    public int write(MemoVO mvo){
        return m_mapper.write(mvo);
    }

    public int edit(MemoVO mvo){
        return m_mapper.edit(mvo);
    }


    
}
