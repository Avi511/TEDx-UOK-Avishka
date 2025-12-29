import { useState, useEffect } from 'react';
import type { Partner } from '../types/models';
import { supabase } from '../lib/supabaseClient';

export function usePartners() {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPartners() {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('partners')
                    .select('*')
                    .order('name', { ascending: true });

                if (error) {
                    throw error;
                }

                if (data) {
                    setPartners(data as Partner[]);
                }
            } catch (err) {
                console.error('Error fetching partners:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch partners');
            } finally {
                setLoading(false);
            }
        }

        fetchPartners();
    }, []);

    return { partners, loading, error };
}
